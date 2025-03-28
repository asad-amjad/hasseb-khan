const Background = () => {
    return (
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/primemed-istanbul-bg.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
    );
  };
  
  export default Background;