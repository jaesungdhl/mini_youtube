// React Module
import React from "react"

// React-redux Module
import { connect } from "react-redux";

// React-router Module
import { withRouter } from "react-router-dom";

// QueryString Module
import QueryString from "query-string";

// Fontawesome Module
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch }from "@fortawesome/free-solid-svg-icons";

// Action Creators
import { FetchSearchQueryData } from "../../../redux/Actions/index";

class Searchbar extends React.Component {
    state = {
        query_string : ''
    }

    record_query = e => {
        this.setState( { query_string: e.currentTarget.value } );
    }

    submit_query = e => {
        e.preventDefault();
        console.log(this.state.query_string)
        this.props.FetchSearchQueryData( this.state.query_string );
        let search_query = this.state.query_string.split(" ").join("+");
        this.setState( { query_string: '' } );
        this.props.history.push(`/results?search_query=${search_query}`)
    }

    render() {
        return (
            <form className="search_bar_container" onSubmit={ this.submit_query }>
                <input type="text" className="search_bar" placeholder="Search" value={this.state.query_string} onChange={this.record_query}/>
                <button type="submit" className="submit_button"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        )
    }
}

export default withRouter( connect( null , { FetchSearchQueryData } )( Searchbar ) );