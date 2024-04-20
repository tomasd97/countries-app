import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
    query {
        countries {
            emojiU
            currency
            states {
                name
            }
            phone
            name
            languages {
                name
            }
            code
            capital
        }
    }
`;
