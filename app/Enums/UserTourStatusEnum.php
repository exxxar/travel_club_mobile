<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class UserTourStatusEnum extends Enum
{
    //        {text: 'Открыт', value: 'open'},
//        {text: 'Отменен', value: 'canceled'},
//        {text: 'Несостоялся', value: 'error'},
//        {text: 'Закрыт', value: 'closed'},
    const open = ['text' => 'Открыт', 'color' => 'blue'];
    const canceled = ['text' => 'Отменен', 'color' => 'red'];
    const error = ['text' => 'Несостоялся', 'color' => 'red'];
    const closed = ['text' => 'Закрыт', 'color' => 'green'];
}
