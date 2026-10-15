import { Link } from "react-router-dom"

const product = () => {
    return (
        <div>
            <div className="flex justify-center ">
                <Link to={'/product/men'}>Men</Link>
                <Link to={'/product/men'}>Men</Link>
            </div>
        </div>
    )
}

export default product
