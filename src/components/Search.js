// import {useState} from "react";
// import {Link} from "react-router-dom";
//
//
// const Search = ({search, setSearch, blogs, filteredBlogs, setFilteredBlogs}) => {
//
//
//
//     const filterBlogs = blogs => {
//
//         const byAuthor = authors => {
//             return authors.filter(author => author === search)
//         }
//         const byTitle = titles => {
//             return titles.filter(title => title === search)
//         }
//         if (search === blogs.title) return byAuthor(blogs)
//         if (search === blogs.author) return byTitle(blogs)
//     }
//     const handleSearch = e => {
//         e.preventDefault()
//         setFilteredBlogs(filterBlogs(blogs))
//
//     }
//
//     return(
//         <div className='search'>
//             <form onSubmit={handleSearch}>
//                 <input placeholder='Find the blog' type="text" value={search}
//                        onChange={e => setSearch(e.target.value)}/>
//                 <button>Go!</button>
//             </form>
//         </div>
//     )
// return {filteredBlogs}
// }
// export default Search