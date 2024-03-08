<?php

namespace App\Http\Controllers\Desktop;

use App\Http\Resources\ReviewResource;
use App\Review;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReviewController extends Controller
{
    public function all()
    {
        $reviews = Review::when(request()->get('user_id'), function (Builder $query) {
            $query->where('user_id', request()->get('user_id'));
        })
            ->when(request()->get('manager_id'), function (Builder $query) {
                $query->where('manager_id', request()->get('manager_id'));
            })
            ->when(request()->get('dashboard_user_id'), function (Builder $query, string $key) {
                $query->where($key, request()->get('dashboard_user_id'));
            })
            ->when(request()->get('limit'), function (Builder $query) {
                $query->limit(request()->get('limit'));
            })
            ->orderBy('created_at', 'desc')->paginate(request()->get('limit', 20));
        return response()->json($reviews, 200);
    }

    public function get(Review $review)
    {
        return response()->json([
            "review" => new ReviewResource($review)
        ], 200);
    }

    public function create(Request $request)
    {
        $review = Review::create([$request->all()]);

        return response()->json([
            "review" => $review,
            "message" => "Отзыв успешно создан",
        ], 201);

    }

    public function update(Review $review, Request $request)
    {
        try {
            $validator = Validator::make(request()->all(), [
                'id' => 'required|integer',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => $validator->messages()], 501);
            }
            if($review) {
//                $review = Review::find($request->id);
                foreach (request()->all() as $key => $value) {
                    if (in_array($key, $review->getFillable())) {
                        $review->$key = $value;
                    }
                }
                $review->save();
                return response()
                    ->json([
                        "message" => "Отзыв успешно обновлён",
                        'review' => new ReviewResource($review)
                    ], 201);
            }
            return response()->json(['message' => "Отзыв не найден"], 501);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function save(Review $review, Request $request)
    {
        try {
            $param = $request->get("param");
            $value = $request->get("value");

            if ($review) {
                $review->{$param} = $value;
                $review->save();

                return response()
                    ->json([
                        'review' => $review,
                        "message" => "Изменения сохранены"
                    ], 201);
            }
        } catch (\Exception $e) {
            return response()
                ->json([
                    "message" => $e->getMessage()
                ], 500);
        }
    }

    public function delete($id)
    {
        $review = Review::find($id);
        $review->delete();

        return response()
            ->json([
                "message" => "Отзыв успешно удален"
            ], 201);
    }
}
