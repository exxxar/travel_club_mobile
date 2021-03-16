<?php

namespace App\Http\Controllers\Desktop;
use App\Events\SendSmsEvent;
use App\Http\Controllers\Controller;
use App\Promocode;
use App\PromocodeHistory;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Mpdf\Mpdf;
use Telegram\Bot\FileUpload\InputFile;
use Telegram\Bot\Laravel\Facades\Telegram;

class PromocodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function generate(Request $request)
    {
        $request->validate([
            "code" => "required",
            "password" => "required"
        ]);
        $mpdf = new Mpdf();

        $promocode = Promocode::where("code", $request->get("code"))
            ->where("password", $request->get("password"))
            //->where("is_active", true)
            ->first();

        if (is_null($promocode))
            return response()
                ->json([
                    "message" => "Промокод не найден!"
                ], 400);

        $code = $request->get("code") ?? "empty";

        $histories = PromocodeHistory::where("promocode_id", $promocode->id)->get();

        $activate_but_not_lead_count = PromocodeHistory::where("promocode_id", $promocode->id)
            ->where("is_confirm", false)->count();

        $activate_lead_count = PromocodeHistory::where("promocode_id", $promocode->id)
            ->where("is_confirm", true)->count();

        $current_date = Carbon::now("+3:00");
        $mpdf->WriteHTML("<h1>Ваша персональная статистика по промокоду <strong>$current_date</strong></h1>");
        $mpdf->WriteHTML("<h6>Идентификатор промокода #$promocode->id</h6>");
        $mpdf->WriteHTML('<h3>Сервис "TravelClub Family"</h3>');
        $mpdf->WriteHTML('<hr>');
        $mpdf->WriteHTML("<p>Ваш промокод: <strong>$code</strong></p>");
        $mpdf->WriteHTML("<p>Описание промокода: <strong>$promocode->self_description</strong></p>");
        $mpdf->WriteHTML("<p>Число активаций (не лиды): <strong>$activate_but_not_lead_count</strong></p>");
        $mpdf->WriteHTML("<p>Число активаций (лиды): <strong>$activate_lead_count</strong></p><br><hr>");
        $mpdf->WriteHTML("<p>Ваш процент: <strong>$promocode->self_percent %</strong></p>");
        $mpdf->WriteHTML("<p>Процент продавца: <strong>$promocode->cashback_percent %</strong></p>");
        $mpdf->WriteHTML("<p>Процент покупателя: <strong>$promocode->buyer_percent %</strong></p><hr>");
        $mpdf->WriteHTML("<table>");
        $mpdf->WriteHTML("<tr>
        <td>Описание тура</td>
        <td>Цена тура</td>
        <td>Покупатель</td>
        <td>Номер телефона</td>
        <td>Покупа состоялась</td>
        <td>Ваше процент, $</td>
        <td>Процент продавца, $</td>
        <td>Процент покупателя, $</td>
</tr>
");
        $tmp_summary_self_procent = 0;
        $tmp_summary_cashback_percent = 0;
        $tmp_summary_buyer_percent = 0;
        $tmp_summary_self_lost_procent = 0;
        foreach ($histories as $history) {
            $tmp_confirm = $history->is_confirm ? "Да" : "Нет";

            $tmp_self_procent = ($promocode->self_percent / 100) * $history->tour_price;
            $tmp_cashback_percent = ($promocode->cashback_percent / 100) * $history->tour_price;
            $tmp_buyer_percent = ($promocode->buyer_percent / 100) * $history->tour_price;

            if ($history->is_confirm) {
                $tmp_summary_self_procent += $tmp_self_procent;
                $tmp_summary_cashback_percent += $tmp_cashback_percent;
                $tmp_summary_buyer_percent += $tmp_buyer_percent;
            } else {
                $tmp_summary_self_lost_procent += $tmp_self_procent;
            }

            $mpdf->WriteHTML("<tr>
        <td>$history->tour_description</td>
        <td>$history->tour_price</td>
        <td>$history->user_name</td>
        <td>$history->user_phone</td>
        <td>$tmp_confirm</td>
        <td>$tmp_self_procent</td>
        <td>$tmp_cashback_percent</td>
        <td>$tmp_buyer_percent</td>
</tr>");
        }

        $mpdf->WriteHTML("</table><hr>");

        $mpdf->WriteHTML("<p>Суммарная Ваша прибыль: <strong>$tmp_summary_self_procent $</strong></p>");
        $mpdf->WriteHTML("<p>Упущенная прибыль: <strong>$tmp_summary_self_lost_procent $</strong></p>");
        $mpdf->WriteHTML("<p>Суммараная Прибыль турагенства: <strong>$tmp_summary_buyer_percent $</strong></p>");
        $mpdf->WriteHTML("<p>Сумарный КэшБэк клиентов: <strong>$tmp_summary_cashback_percent $</strong></p><hr>");
        return $mpdf->Output("report.pdf", 'I');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Promocode $promocode
     * @return \Illuminate\Http\Response
     */
    public function show(Promocode $promocode)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Promocode $promocode
     * @return \Illuminate\Http\Response
     */
    public function edit(Promocode $promocode)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Promocode $promocode
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Promocode $promocode)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Promocode $promocode
     * @return \Illuminate\Http\Response
     */
    public function destroy(Promocode $promocode)
    {
        //
    }
}
