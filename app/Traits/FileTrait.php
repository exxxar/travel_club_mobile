<?php
namespace App\Traits;

use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

trait FileTrait
{
    protected $slash = DIRECTORY_SEPARATOR;

    /**
     * @param $file
     * @param $name
     * @param $path
     * @param $time
     * @param $disk
     * @return string
     */
    public function saveToStorage($file, $name=null, $path='user_documents', $time=null, $disk='local')
    {
        $fullPath = 'public/'.$path.'/';
        if(!$time)
        {
            $time = Carbon::now();
        }
        $timeFormat = $time->format('Y-m-d_H-s-i');
        if(!$name) {
            $name = $file->getClientOriginalName();
        }
        $ext = $file->getClientOriginalExtension();
        $fileName = $timeFormat . $name . '.'. $ext;
        Storage::disk($disk)->put($fullPath . $fileName, $file, 'public');

        return $path.'/' . $fileName;
    }

    public function getFilePath($file, $name=null, $path='user_documents', $time=null)
    {
//        $fullPath = 'public/'.$path.'/';
        if(!$time)
        {
            $time = Carbon::now();
        }
        $timeFormat = $time->format('Y-m-d_H-s-i');
        if(!$name) {
            $name = $file->getClientOriginalName();
        }
        $ext = $file->getClientOriginalExtension();
        $fileName = $timeFormat . $name . '.'. $ext;
//        Storage::disk($disk)->put($fullPath . $fileName, $file, 'public');

        return $path.'/' . $fileName;
    }

    public function generatePreview($path, $filename): string
    {
        $previewPath = $path . $this->slash . 'previews' . $this->slash;
        $thumbnail = Image::make(Storage::disk('public')->get($path . $this->slash . $filename))->fit(960, 480);
        Storage::disk('public')->put($previewPath . $filename, $thumbnail);
        $thumbnail->save(Storage::disk('public')->path($previewPath . $filename));
        return $previewPath . $filename;
    }
}
