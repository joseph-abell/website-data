import { Observable } from 'apollo-link';
import { ApolloLink } from 'apollo-link';
export declare class ComplexObjectLink extends ApolloLink {
    private link;
    constructor(credentials: any);
    request(operation: any, forward: any): Observable<any>;
}
export declare const complexObjectLink: (credentials: any) => ApolloLink;
