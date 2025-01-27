<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Throwable;
use \Tymon\JWTAuth\Exceptions\TokenExpiredException as TokenExpiredException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        Log::info('here Exception render = '. $exception->getMessage() . '  = ');
        //проверить, что приходят нужные коды, в конфиге поменять время жизни токена на несколько минут
        if ($exception instanceof UnauthorizedHttpException) {
            if ($exception->getMessage() === 'Token has expired') {
                Log::info('here UnauthorizedHttpException');
                return response()->json(['message' => 'Unauthenticated.'], 403);
            }

        }
        return parent::render($request, $exception);
    }
}
