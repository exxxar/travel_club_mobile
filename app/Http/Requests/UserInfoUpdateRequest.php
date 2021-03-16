<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserInfoUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'FullName' => 'required|string|max:100',
            'Age' => 'required|integer',
            'Sex' => 'required|integer',
            'Birthday' => 'required|string|max:100',
            'Passport' => 'required|string|max:100',
        ];
    }
}
