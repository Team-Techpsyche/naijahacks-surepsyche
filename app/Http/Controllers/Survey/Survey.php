<?php

namespace App\Http\Controllers\Survey;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\SurveyModel;
use Validator;

class Survey extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(SurveyModel::get(), 200);
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules = [
            'name' => 'required|min:12|max:192',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $survey = SurveyModel::create($request->all());
        return response()->json($survey, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $survey = SurveyModel::find($id);
        if (is_null($survey)) {
            return response()->json(["message" => "Record Not Found!"], 404);
        }
        return response()->json($survey, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $survey = SurveyModel::find($id);
        if (is_null($survey)) {
            return response()->json(["message" => "Record Not Found!"], 404);
        }
        $survey->update($request->all());
        return response()->json($survey, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $survey = SurveyModel::find($id);
        if (is_null($survey)) {
            return response()->json(["message" => "Record Not Found!"], 404);
        }
        $survey->delete();
        return response()->json(null, 204);
    }
}
