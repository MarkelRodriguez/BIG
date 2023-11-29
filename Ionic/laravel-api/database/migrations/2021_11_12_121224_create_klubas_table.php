<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKlubasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('klubas', function (Blueprint $table) {
            $table->id();
            $table->string('izena');
            $table->string('argazkia');
            $table->string('mota');
            $table->string('pribatua');
            $table->string('kopurua');
            $table->string('deskripzioa');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('klubas');
    }
}
