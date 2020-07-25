<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use App\posts;
use App\Http\Resources\PostResource;
use App\Http\Resources\PostResourceCollection;

class PostsController extends Controller
{
    public function index(): PostResourceCollection
    {
        return new PostResourceCollection(posts::orderBy('created_at', 'desc')->paginate());
    }

    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required',  // ['required', 'image'],
            'caption' => 'required',
        ]);

        $imagePath = $request['image']->store('uploads', 'public');

        $image = Image::make(public_path("storage/{$imagePath}"))->fit(1200, 1200);
        $image->save();

        $post = posts::create([
            'imagePath' => $imagePath,
            'caption' => $request['caption'],
        ]);

        $resp = new PostResource($post);
        $resp['imagePath'] = env('APP_STORAGE') . $imagePath;
        return $resp;
    }
}
