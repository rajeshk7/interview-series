import DatabaseProxy from "./DatabaseProxy";

const dbProxy = new DatabaseProxy();
dbProxy.getEntry('admin', {id: '1', name: 'John Doe'});
dbProxy.getEntry('user', {id: '1', name: 'John Doe'});
dbProxy.createEntry('admin', {id: '1', name: 'John Doe'});
dbProxy.createEntry('user', {id: '1', name: 'John Doe'});
dbProxy.deleteEntry('admin', '1');
dbProxy.deleteEntry('user', '1');