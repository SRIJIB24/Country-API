import './CardContainerShimmer.css'


const CardContainerShimmer = () => {
  return (
    <div className='card-container'>
    {Array.from({length:100}).map((el,i)=>{ return <div key = {i} className="country-card shimmer-card"></div>})}
    </div>
  )
}
export default CardContainerShimmer