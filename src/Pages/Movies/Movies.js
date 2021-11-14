import React from 'react'
import axios from 'axios'
import { Grid } from '@mui/material';
import ContentDetail from '../../Components/ContentDetail/ContentDetail'
import AppPagination from "../../Components/Pagination/Pagination"
import Genres from '../../Components/Genres/Genres'
import LoaderComponents from '../../Components/Loader/LoaderComponents'
import Error from '../../Components/Error/Error'
export default function Movies() {
    const [movies, setMovies] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [isErr, setisErr] = React.useState(false)
    const [page, setPage] = React.useState(3)
    const [totalPage, setTotalPage] = React.useState(10)

    const [genres, setGenres] = React.useState([])
    const [selectedGenres, setSelectedGenres] = React.useState([])
    const [selectedGenresIds, setSelectedGenresIds] = React.useState([])


    //convert list genres to list id

    const getGenresId = (selectedGenres) => {
        if (selectedGenres.length < 1) {
            return ""
        }
        const genreId = selectedGenres.map(item => item.id)
        return genreId.reduce((acc, curr) => {
            return acc + "," + curr
        })
    }

    let genIds = getGenresId(selectedGenres)
    console.log(genIds)

    //GET MOVIES 
    let getMovies = async () => {


        const data = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=6db49639138ee4ac1b9a3a592334ab74&language=en-US&page=${page}&with_genres=${genIds}`)
            .then(res => {
                setMovies(res.data?.results)
                setLoading(false)
                setTotalPage(res.data?.total_pages)

            })
            .catch(err => {
                setisErr(true)
                console.log(err)
            })





    }
    //Reload when API called
    React.useEffect(() => {
        getMovies()
    }
        , [])

    //Relaoad when Page is Change
    React.useEffect(() => {
        getMovies()
    }, [page, selectedGenres])







    return (
        <>

            {
                loading ? <LoaderComponents /> : isErr ? <Error /> : (<>
                    <Genres
                        genres={genres}
                        setGenres={setGenres}
                        selectedGenres={selectedGenres}
                        setSelectedGenres={setSelectedGenres}
                        selectedGenresIds={selectedGenresIds}
                        setSelectedGenresId={setSelectedGenresIds}
                    />
                    <Grid container direction="row" alignItems="center" justifyContent="center" >


                        {movies.map((movie, index) => {
                            return (
                                <Grid item md={6} >
                                    <ContentDetail movie={movie} key={index} />
                                </Grid>
                            )
                        })}


                        <AppPagination page={page} setPage={setPage} totalPage={totalPage} />
                    </Grid>
                </>)
            }


        </>
    )
}
