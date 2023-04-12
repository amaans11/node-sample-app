'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('fulfillment_history', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: 'string',
      length: 100,
      notNull: true,
    },
    location_id: {
      type: 'string',
      length: 100,
      notNull: true,
    },
    tracking_number: {
      type: 'string',
      length: 100,
      notNull: true,
    },
    created_at: {
      type: 'timestamp',
      defaultValue: new String('CURRENT_TIMESTAMP'),
      notNull: true,
    },
    updated_at: {
      type: 'timestamp',
      notNull: false,
    }
  });
};

exports.down = function(db) {
  return db.dropTable('fulfillment_history');
};

exports._meta = {
  "version": 1
};
