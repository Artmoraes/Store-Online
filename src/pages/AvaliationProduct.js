import React from 'react';
import PropTypes from 'prop-types';
import Avaliation from '../components/Avaliation';

class AvaliationProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      rate: 1,
      text: '',
      avaliationData: JSON.parse(localStorage.getItem(props.id)),
    };
  }

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  saveButton = () => {
    const { id } = this.props;
    const { email, rate, text } = this.state;
    const dados = JSON.parse(localStorage.getItem(id)) || [];
    const saveData = {
      userEmail: email,
      userRate: rate,
      userText: text,
    };
    dados.push(saveData);
    localStorage.setItem(id, JSON.stringify(dados));
    this.setState({ avaliationData: dados });
  }

  render() {
    const { email, avaliationData } = this.state;

    return (
      <section>
        <form>
          <input
            data-testid="product-detail-email"
            type="email"
            placeholder="Digite seu email"
            name="email"
            value={ email }
            onChange={ this.handleInput }
          />
          <label htmlFor="radioButton">
            Nota:
            <input
              type="radio"
              data-testid="1-rating"
              value={ 1 }
              name="rate"
              onChange={ this.handleInput }
            />
            <input
              type="radio"
              data-testid="2-rating"
              value={ 2 }
              name="rate"
              onChange={ this.handleInput }
            />
            <input
              type="radio"
              data-testid="3-rating"
              value={ 3 }
              name="rate"
              onChange={ this.handleInput }
            />
            <input
              type="radio"
              data-testid="4-rating"
              value={ 4 }
              name="rate"
              onChange={ this.handleInput }
            />
            <input
              type="radio"
              data-testid="5-rating"
              value={ 5 }
              name="rate"
              onChange={ this.handleInput }
            />
          </label>
          <textarea
            data-testid="product-detail-evaluation"
            maxLength="500"
            placeholder="Insira sua avaliação"
            name="text"
            onChange={ this.handleInput }
          />
          <button
            data-testid="submit-review-btn"
            type="submit"
            onClick={ this.saveButton }
          >
            Enviar
          </button>
        </form>
        {
          avaliationData !== null ? (avaliationData.map((avaliacao, index) => (
            <div key={ index }>
              <Avaliation
                email={ avaliacao.userEmail }
                rate={ avaliacao.userRate }
                text={ avaliacao.userText }
              />
            </div>
          ))
          ) : ''
        }
      </section>

    );
  }
}

AvaliationProduct.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AvaliationProduct;
