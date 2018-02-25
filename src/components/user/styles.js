import _ from 'lodash';
import cardStyles from '../styles';

const styles = _.cloneDeep( cardStyles );

styles.card.maxWidth = '700px';
styles.card.margin = '50px 0';

export default styles;
