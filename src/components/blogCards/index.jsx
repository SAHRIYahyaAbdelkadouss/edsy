import { Link } from 'react-router-dom'
import './style.scss'

const BlogCards = ({data, src}) => {
    return(
        <>
            {
                data.map((e,i)=> 
                    <div className="col-lg-4 col-md-6 gy-4" key={i}>
                        <Link to={e.link} className="blog_link">
                            <div className="blog-card">
                                <div className="thumb">
                                    <img src={require(`../../pages/${src}/${e.imgUrl}`)} className="img-fluid" alt={e.category} />
                                </div>
                                <div className="body">
                                    <div className='mb-8'>
                                        <span className='text-uppercase txt-4 fw-500 color-primary'>{e.category}</span>&nbsp;•&nbsp;<span className='txt-4'>{e.date}</span>
                                    </div>
                                    <h4 className="title">{e.title}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            }
        </>
    )
}

export default BlogCards