import { gql } from "@apollo/client";

export const QUERY_ALL_POSTS = gql `
query Brands($endIndex: Float!, $startIndex: Float!) {
    brands(endIndex: $endIndex, startIndex: $startIndex) {
    _id
    cover_image
    }
}
`