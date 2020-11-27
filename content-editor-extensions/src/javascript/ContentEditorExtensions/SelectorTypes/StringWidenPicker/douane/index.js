import * as Ajv from 'ajv';
import schema from './lib/schema';
// Import {getGQLWorkspace} from "misc/utils";

const ajv = new Ajv({useDefaults: true});
// TODO le try catch doit etre fait ici et un component react doit etre retourne
const contextValidator = context => {
    const valid = ajv.validate(schema.context, context);
    if (!valid)
    // Throw new Error(`An error occurred during the validation of context object, errors : ${JSON.stringify(ajv.errors)}`);
    {
        throw {item: 'Context configuration object', errors: ajv.errors};
    }

    // Context.gql_variables.workspace = getGQLWorkspace(context.workspace);
    return context;
};

export {
    contextValidator
};