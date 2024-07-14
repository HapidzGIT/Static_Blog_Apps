---
title: 'Cara membuat React Custom Hooks'
subtitle: 'Cara membuat code reusable dan dapat digunakan di tiap komponen'
date: '2020-12-19'
cr: ['https://www.artstation.com/shizuorin']
---

## Membuat React-Hooks untuk Fetch API

Mengambil data dari backend merupakan salah satu bagian penting dari aplikasi web. Agar setiap aplikasi dapat bekerja secara dinamis, aplikasi mengambil data dari server dan kemudian menampilkannya di antarmuka pengguna.

Kami mengambil data menggunakan fetch API dan menggunakan hooks React bawaan seperti useState, useEffect, dan useReducer, data yang diambil ditetapkan ke variabel status. Data tersebut kemudian digunakan dalam komponen untuk ditampilkan dalam tampilan.

Sebelum masuk ke kode bagaimana cara melakukannya, mari kita lihat dulu apa itu React hook dan mengapa ia digunakan..

## Apa itu react custom Hooks?

Simpelnya ada sekarang bisa memisahkan fungsi anda untuk panggilan api dan untuk display data atau biasa disebut separation of concerns

mengapa kita menggunakan custom hook kelebihannya adalah 👇:

 Sekarang komponen Anda tidak lagi memiliki banyak logika yang berulang. dan sekarang component selalu bisa digunakan ulang atau Reusable component.

```bash
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

```

## Dan sekarang useFetch tersebut bisa dipanggil di component parent nya
```bash 
import React from 'react';
import useFetch from './useFetch';

const PokemonList = () => {
  const { data: pokemon, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {pokemon.results.map((p) => (
        <li key={p.name}>{p.name}</li>
      ))}
    </ul>
  );
};

export default PokemonList;

```
Beberapa reference tentang artikel ini yang kalian bisa lihat 👇: 

- [react.dev](https://react.dev/learn/reusing-logic-with-custom-hooks) 
- [React Custom Hooks Dev](https://dev.to/shaedrizwan/building-custom-hooks-in-react-to-fetch-data-4ig6)

