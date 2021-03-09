<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use KubAT\PhpSimple\HtmlDomParser;

class TestGetData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'weather:gis';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */

    public function getPrecipitationTypeByString($str)
    {

        $cloudy_var = [
            "rain",
            "snow",
            "storm",

        ];

        foreach ($cloudy_var as $key => $value) {

            if (mb_strpos($str, $value . ".png") > 0) {
                return $value;
            }
        }

        return "normal";
    }

    public function getWindDirTypeByString($str)
    {

        $cloudy_var = [
            "w1",//св
            "w2",//в
            "w3",//юв
            "w4",//ю
            "w5",//с
            "w6",//з
            "w7",//сз

        ];

        foreach ($cloudy_var as $key => $value) {
            if (mb_strpos($str, $value . ".gif") > 0) {
                return $value;
            }
        }

        return "w0";//штиль
    }

    public function getCloudyTypeByString($str)
    {

        $cloudy_var = [
            "dull",//пасмурно
            "sun",//солнечно
            "sunc",//малооблочно
            "suncl"
        ];

        foreach ($cloudy_var as $key => $value) {
            if (mb_strpos($str, $value . ".png") > 0) {

                return $value;
            }
        }
    }

    public function fieldProccessor($index, $str)
    {
        //Log::info($index . " " . $str);

        if (mb_strpos("$str", "still.gif") > 0)
            return "empty data";

        switch ($index) {
            case 4:
            case 9:
                return $this->getCloudyTypeByString($str);
                break;
            case 6:
            case 11:

                try {
                    preg_match_all("|([0-9]+)м.с|U",
                        $str,
                        $out, PREG_PATTERN_ORDER);

                    $tmp_speed = $out[1][0];

                } catch (\Exception $ex) {
                    $tmp_speed = "0";
                }
                //  Log::info(print_r($out,true));
                return (object)[
                    "type" => $this->getWindDirTypeByString($str),
                    "speed" => $tmp_speed
                ];

            case 5:
            case 10:
                return $this->getPrecipitationTypeByString($str);

            default:
                return $str;
        }
    }

    public function oneMonth($year, $month)
    {
        $dom = HtmlDomParser::file_get_html("https://www.gismeteo.ru/diary/4445/$year/$month/", false, null, 0);

        $global_tmp = [];
        $tmp = [];
        $index = 1;
        foreach ($dom->find('td') as $element) {

            if ($index % 11 != 0) {
                array_push($tmp, $this->fieldProccessor($index, $element->innertext));
            } else {
                array_push($tmp, $this->fieldProccessor($index, $element->innertext));
                array_push($global_tmp, $tmp);
                $tmp = [];
                $index = 0;
            }

            $index++;
        }

        $jsonResult = [];
        foreach ($global_tmp as $item) {
            array_push($jsonResult, (object)[
                "index" => $item[0],
                "day" => (object)[
                    "temperature" => $item[1],
                    "pressure" => $item[2],
                    "cloudy" => $item[3],
                    "weather" => $item[4],
                    "wind" => $item[5],
                ],
                "night" => (object)[
                    "temperature" => $item[6],
                    "pressure" => $item[7],
                    "cloudy" => $item[8],
                    "weather" => $item[9],
                    "wind" => $item[10],
                ]
            ]
            );


        }

        Log::info($jsonResult);

        Storage::put("result-$year-$month.json", json_encode($jsonResult));
    }

    public function handle()
    {


        ini_set('memory_limit', '-1');

        $years = ["2018", "2019", "2020"];


        foreach ($years as $year) {
            for ($month = 1; $month <= 12; $month++) {
                $this->oneMonth($year, $month);
               // sleep(10);
            }
        }

        return 0;
    }
}
