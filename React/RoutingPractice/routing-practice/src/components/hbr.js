const HBR = (props) => {
	const { word, font, color } = props;
	if (isNaN(word)) {
		return (
			<h1 style={{ color: font, backgroundColor: color }}>
				Word is: {word}
			</h1>
		);
	} else {
		return <h1>Number is: {word}</h1>;
	}
};

export default HBR;
