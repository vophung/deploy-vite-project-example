<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/slot-vue', function () {
    return view('templates.slot-vue-index');
});

Route::get('/suspense-vue', function() {
    return view('templates.suspense-vue-index');
});

Route::get('/skeleton-loading-vue', function() {
    return view('templates.skeleton-loading-vue-index');
});

Route::get('/vue-router-transitions-vue', function() {
    return view('templates.vue-router-transitions-index');
});

Route::get('/dymanic-scroll-states-vue', function() {
    return view('templates.dymanic-scroll-states-index');
});

Route::get('/simplified', function() {
    return view('templates.simplified-index');
});

Route::get('/modal-simplified', function() {
    return view('templates.modal-simplified-index');
});

Route::get('/', function () {
    return view('welcome');
});
