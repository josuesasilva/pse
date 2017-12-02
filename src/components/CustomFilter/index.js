import React from 'react';
import { Grid, Message } from 'semantic-ui-react';
import FilterProperties from './FilterProperties';
import NavigationButtons from '../shared/NavigationButtons';

const style = {
	container: {
		marginTop: '20px',
		width: '100%'
	},
	canvas: {
		maxWidth: '100%',
		height: 'auto'
	}
};

class FilterImage extends React.Component {
	render() {
		return (
			<div style={style.container}>
				<Grid>
					<Grid.Row>
						<Message style={style.container}>
							<Message.Header>Filtro customizável</Message.Header>
							<p>
								Selecione dentre as opções abaixo quais filtros deseja-se
								aplicar.
							</p>
						</Message>
					</Grid.Row>
					<Grid.Row columns={1}>
						<Grid.Column>
							<FilterProperties />
						</Grid.Column>
						<Grid.Column>
							<canvas id="image-canvas" style={style.canvas} />
						</Grid.Column>
					</Grid.Row>
					<NavigationButtons
						target={this.props.match.params.target}
						id={this.props.match.params.id}
					/>
				</Grid>
			</div>
		);
	}
}

// function mapStateToProps({ images, imageActions }) {
// 	return { images, imageActions };
// }

// export default connect(mapStateToProps, actions)(withRouter(FilterImage));
export default FilterImage;