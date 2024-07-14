---
title: 'Laravel Backend'
subtitle: 'Create an API Backend Laravel and MVC concept'
date: '2020-12-27'
---

<img src="/Laravel.svg.png" alt="laravel" width="200">

Membuat sebuah aplikasi komputer bukanlah hal yang sederhana. Dibutuhkan berbagai macam komponen untuk disatukan sehingga menjadi sebuah aplikasi. Umumnya, aplikasi dikerjakan oleh dua orang programmer, yaitu back-end dan front-end. Programmer back-end adalah orang yang menulis kode di bagian logika aplikasi. Sedangkan programmer front-end adalah orang yang menulis kode untuk membuat suatu desain antarmuka.

<img src="/Mvc.webp" alt="mvc">

### MVC Concept

Laravel menyediakan concept mvc yaitu model, view, controller, dimana ketika client request ke server dan dengan mengakses route yang telah disediakan dan dimana route tersebut terhubung dengan controller dan controller yang terhubung ke model serta model yang terhubung ke database membuat laravel disukai para developer.

Setelah mengethaui concept tersebut mari kita buat satu endpoint API

### Buat Route nya

<img src="/route.png" alt="mvc">

Terhilat dimana route product terhubung dengan Productcontroller

### Hubungkan ke Controller

<img src="/Product.png" alt="mvc">

### dan sekarang model nya

<img src="/Model.png" alt="mvc">

### Sekarang kita buat satu data di database

saya akan membuat nya menggunakan postman anda bisa cari postman di search engine anda dan ketikan postman dan anda bisa download serta konfigurasikan sekarang saatnya kita coba 👇:

<img src="/Postman.png" alt="mvc">

anda bisa melihat bahwa kita mengirimkan data ke database melalui postman dan ketika kita coba jalankan untuk dapatakan data nya dibawahn ini :

## Get Data Dari Database

<img src="/Postman-2.png" alt="mvc">

Bisa dilihat data pun muncul dari database dengan mengeluarkan beberap data yang telah dikirimkan.

- [Sumber](https://medium.com/@albarranaufala/penerapan-mvc-pada-framework-laravel-f4588b8dcfcb)
- [Postman](https://www.postman.com/)
- [Laravel](https://laravel.com/)
