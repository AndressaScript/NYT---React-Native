
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import BannerMovies from '../../components/bannerFilmes';
import CardMovies from '../../components/cardMovies';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import Filmes from '../../data/movies';
import { useEffect,useState } from 'react';



export default function App() {

  const[movies,setMovies] = useState();

  useEffect(()=>{


    async function buscarLivros(){
      const key = 'XqGCVYChfGH3UqPm82TqzbFjwQLz8Nb8';
      const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list=Young%20Adult%20Hardcover&api-key=${key}`);
      const data = await response.json()
      console.log(data.results)
      setMovies(data.results)
    }
      buscarLivros();


  },[]  )  



  return (
    <View style={styles.container}>
     <Header></Header>

     <SearchBar></SearchBar>

     <BannerMovies></BannerMovies>
     
    
     <View style = {{width :"90%"}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={movies}
            keyExtractor={(item) => item.asterisk
            }
            renderItem={({ item }) => (
              
              <CardMovies
                titulo={item.title}
                imagem={item.poster_path}
                nota={item.vote_average}
              />
            )}
          />
        </View>
    
  

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:'center'
    
    
  },
});
