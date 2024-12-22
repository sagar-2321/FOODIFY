const ShimmerUI = () => {
  const shimmerCards = Array.from({ length: 10 }, (_, index) => (
    <div className="shimmer-card" key={index}></div>
  ));

  return <div className="shimmer-ui">{shimmerCards}</div>;
};

export default ShimmerUI;
