<?php

namespace App\Http\Controllers;

use App\ClientTicket;
use Illuminate\Http\Request;

class ClientTicketController extends Controller
{
    public function all()
    {
        $clientTickets = ClientTicket::orderBy('created_at', 'desc')->get();
        return response()->json([
            "clientTickets" => $clientTickets,
        ], 200);
    }
    public function get($id)
    {
        $clientTicket = ClientTicket::find($id);
        return response()->json([
            "clientTicket" => $clientTicket
        ], 200);
    }
    public function new(Request $request)
    {
        $clientTicket = ClientTicket::create([$request->all()]);

        return response()->json([
            "clientTicket" => $clientTicket,
        ], 200);

    }
    public function update($id, Request $request)
    {
        $param = $request->get("param");
        $value = $request->get("value");

        $clientTicket = ClientTicket::find($id);
        $clientTicket[$param] = $value;
        $clientTicket->save();

        return response()
            ->json([
                'clientTicket' => $clientTicket,
                "message" => "Изменения сохранены",
            ], 200);

    }
    public function delete($id)
    {
        $clientTicket = ClientTicket::find($id);
        $clientTicket->delete();

        return response()
            ->json([
                "message" => "Тикет успешно удален"
            ],200);
    }
}
