function Logo() {

return(
    <>

    <img src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1000&h=563&crop=1" alt="logo-image" style={{height:50,padding:20}}/>

    <span style={{color:"white", padding:'10px', margin:'20px', position:"absolute", top:"13px",cursor:"pointer" }}>
       

    <span style={{color:"white", padding:'10px'}}>Home</span>
    <span style={{color:"white", padding:'10px'}}>Tv Shows</span>
    <span style={{color:"white", padding:'10px'}}>Movies</span>
    <span style={{color:"white", padding:'10px'}}>New & popular</span>
    <span style={{color:"white", padding:'10px'}}>My List</span>
    <span style={{color:"white", padding:'10px'}}>Browse by Language</span>

    
    <input type="text" placeholder="Titles,peoples,generes" style={{backgroundColor:"black", color:"white", position:"absolute",right :"-600px"  }}></input>



    </span>



    

    </>
)


}

export default Logo;