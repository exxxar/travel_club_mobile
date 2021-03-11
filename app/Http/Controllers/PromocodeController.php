<?php

namespace App\Http\Controllers;

use App\Promocode;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Mpdf\Mpdf;


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
            ->where("password", bcrypt($request->get("password")))
            ->where("is_active", true)
            ->first();

        if (is_null($promocode))
            return response()
                ->json([
                    "message"=>"Промокод не найден!"
                ],400);

        $code = $request->get("code") ?? "empty";

        $current_date = Carbon::now("+3:00");
        $mpdf->WriteHTML("<h1>Ваша персональная статистика по промокоду <strong>$current_date</strong></h1>");
        $mpdf->WriteHTML("<h6>Идентификатор промокода</h6>");
        $mpdf->WriteHTML('<h3>Сервис "TravelClub Family"</h3>');
        $mpdf->WriteHTML('<hr>');
        $mpdf->WriteHTML("<p>Ваш промокод: <strong>$code</strong></p>");
        $mpdf->WriteHTML("<p>Описание промокода: <strong>$promocode->self_description</strong></p>");
        $mpdf->WriteHTML("<p>Число активаций (не лиды): <strong>$promocode->activate_but_not_lead_count</strong></p>");
        $mpdf->WriteHTML("<p>Число активаций (лиды): <strong>$promocode->activate_lead_count</strong></p><br><hr>");
        $mpdf->WriteHTML("<p>Ваш процент: <strong>$promocode->self_percent</strong></p>");
        $mpdf->WriteHTML("<p>Процент продавца: <strong>$promocode->cashback_percent</strong></p>");
        $mpdf->WriteHTML("<p>Процент покупателя: <strong>$promocode->buyer_percent</strong></p>");

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
