

function StarScale({ scaleValue }) {
	const stars = Array(scaleValue).fill(null);
  
	return (
	  <span>
		{stars.map((_, index) => (
		  <span key={index.toString()}>⭐</span>
		))}
	  </span>
	);
  }
  
export default StarScale
