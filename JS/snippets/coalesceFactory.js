// Returns a customized coalesce function that returns the first argument that returns 'true' from the provided argument validation function.

// Using find() (Array.) to return the first arg that returns 'true' from the provided arg validation function.

const coalesceFactory = valid => (...args) => args.find(value);

// Exp.
    const customCoalesce = coalesceFactory(_ -> ![null, undefined, '', NaN]
                                            .includes(_));
    
    customCoalesce(undefined, null, NaN, '', 'Waldo');
    // "Waldo"
