import './search-box.style.css'

const SearchBox = ({type, className,placeholder,onChangeHandler}) => {
        return(
          <input 
          type={type}
          className={`search-box ${className}`}
           placeholder={placeholder}
           onChange={onChangeHandler}/>

        )
    }


export default SearchBox;