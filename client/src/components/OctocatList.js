import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

// avec les imports gql et graphql, on lie notre requete du component à notre schèma (server)
const getOctocatQuery = gql` 
    {
        octocats {
            id
            nom
            prenom 
            linkedIn
        }
    }
`

class OctocatList extends Component {
    render() {
        return(
            <Query query={getOctocatQuery}>
                {({ data, loading, error}) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Error</p>
                    return (                
                    <div>
                        <ul id="octocat-list">
                            {data.octocats && data.octocats.map(octocat => (
                                //assignation dune clef pour chaque octocat
                                <li key={`octocat${octocat.id}`}>
                                    {octocat.id} : {octocat.prenom} {octocat.nom}, GitHub: {octocat.gitHub}
                                </li>
                            ))}
                        </ul>
                    </div>
                    )
                }}
            </Query>
        );
    }
}

// mettre à jour l'export: 
export default OctocatList
