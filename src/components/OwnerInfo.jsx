function OwnerInfo({ ownerName, current }) {
  return (
    <>
      <img id="ownerImg" src={`owner${current}.png`} alt="ownerImg" />

      <h1 id="ownerName">
        <h1 style={{ color: "black" }}>{ownerName}</h1>
        <img id="tick" src="tick.png" alt="tick" />
      </h1>
    </>
  );
}
export default OwnerInfo;
