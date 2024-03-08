<?php
namespace App\Traits;


use App\Exports\SimpleExport;
use Maatwebsite\Excel\Facades\Excel;

trait ExcelTrait
{
    public function getSimpleExcel($items,$fields=null,$headings=null,$name='items',$ext='xlsx')
    {
        $export = new SimpleExport($items, $fields, $headings);
        return $this->downloadExcel($export,$name,$ext);
    }

    public function downloadExcel($export, $name = 'items', $ext = 'xlsx')
    {
        $fileName = $name . '.' . $ext;
        $writerType = $ext === 'csv' ? \Maatwebsite\Excel\Excel::CSV : \Maatwebsite\Excel\Excel::XLSX;
        return Excel::download($export, $fileName, $writerType);
        //Excel::store($export, $fileName, 'public', $writerType);
        //return response()->download(storage_path('app/public/'.$fileName))->deleteFileAfterSend();
    }
}
