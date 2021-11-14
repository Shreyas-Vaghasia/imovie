import * as React from 'react';
import Chip from '@mui/material/Chip';
import axios from 'axios'

export default function Genres({
    genres,
    setGenres,
    selectedGenres,
    setSelectedGenres,
    
}) {



    const handleAddgenre = (genre) => {

        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres?.filter(g => g.id !== genre.id))
    }
    const handleRemovegenre = (genre) => {
        setSelectedGenres(selectedGenres.filter(item => item.id !== genre.id))
        setGenres([...genres, genre])

    }



    const getGenres = async () => {
        const data = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=6db49639138ee4ac1b9a3a592334ab74&language=en-US`)
            .then(res => {


                setGenres(res.data.genres)
            }
            )
            .catch(err => {
                console.log(err)
            }
            )

    }

    React.useEffect(() => {
        getGenres()
    }, [])




    return (
        <div>
            {
                selectedGenres?.map(item => {
                    return (
                        <Chip
                            key={item.id}
                            label={item.name}
                            onDelete={() => handleRemovegenre(item)}
                            sx={{ backgroundColor: "#006d77", marginTop: 1, marginLeft: 1, fontSize: 20 }}


                        />
                    )

                }
                )}




            {
                genres?.map((genre, index) => {

                    return (
                        <Chip
                            key={index}
                            label={genre.name}
                            variant="outlined"
                            sx={{ backgroundColor: "#9bf6ff", marginTop: 1, marginLeft: 1, fontSize: 20 }}
                            onClick={(e) => handleAddgenre(genre)}

                        />
                    )
                }
                )
            }




        </div>
    )
}

