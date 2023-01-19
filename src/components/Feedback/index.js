// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {value: false}

  feedBackReceived = () => {
    const {value} = this.state
    this.setState({value: !value})
  }

  render() {
    const {value} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <>
        <div className="css-bg-container">
          <div className="css-card-container">
            {value ? (
              <img
                src={loveEmojiUrl}
                className="css-emoji-itself"
                alt="love emoji"
              />
            ) : (
              ''
            )}
            {value ? <h1>Thank You</h1> : ''}
            {value ? (
              <p>
                We will use feedback to improve your customer support
                performance
              </p>
            ) : (
              ''
            )}
            {value ? (
              ''
            ) : (
              <>
                <h1>
                  How satisfied are you with our customer support performance
                </h1>
                <ul className="css-ul-container">
                  {emojis.map(eachEmoji => (
                    <li key={eachEmoji.id} className="css-list-itself">
                      <button
                        type="button"
                        className="css-button-itself"
                        onClick={this.feedBackReceived}
                      >
                        <img
                          src={eachEmoji.imageUrl}
                          alt={eachEmoji.name}
                          className="css-emoji-itself"
                        />
                        <label>{eachEmoji.name}</label>
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default Feedback
