import db from './database/connection.js';
import minimalist from 'minimist';

// Import action dynamically and execute
(async () => {

    // Establish database connection
    db.connect();

    try {

        // Read arguments
        const args = minimalist(process.argv);

        // Check if action argument exists
        if(!args.action) throw new Error("--action argument is missing");

        // Get action name from arguments
        const actionName = args.action;

        // Import action module
        const module = await import(`./actions/${actionName}.js`);

        // Get default export from action
        const action = module.default;

        // Check if action module's default export is a function
        if(typeof action === 'function') {

            // Execute action
            await action();

        }

    } catch (error) {
        console.log(`Error: ${error.message}`);
    }

    // Close database connection
    db.end();

})();
