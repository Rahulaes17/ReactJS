import { useParams } from 'react-router-dom'

const DynAbout = () => {

    const params = useParams();

  return (
    <div>
      <h1>About {params.id} </h1>
    </div>
  )
}

export default DynAbout
