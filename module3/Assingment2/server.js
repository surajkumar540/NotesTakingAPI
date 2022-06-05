const express = require('express')
const path = require('path')
const app = express()
const bp = require('body-parser')
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: '',
    apiKey: ''
});
var base = Airtable.base('app6XyZNIZWSC5eOA');

app.use(express.static(`${__dirname}`));
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


app.get('/',function (req, res) {
   res.sendFile(path.join(__dirname,"./index.html"))
})

app.post('/details',function(req,res){
    // console.log(req.body);
    let name = req.body.name;
    let description = req.body.description;
    let size = req.body.size;
    base('Projects').create([
        {
          "fields": {
            "Name": name,
            "Description": description,
            "Size":size,
          }
        },
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
          return res.send(record.getId());
        });
      });
})

app.get('/getAll',async function(req,res){
    let arr = [];
    base('Projects').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 3,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
            let obj = {id:record.getId(),name:record.get('Name'),description:record.get('Description'),size:record.get('Size')}
            console.log(obj);
            arr.push(obj);
        });
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
        else{
            return res.send(arr);
        }
    });
})

app.post('/delete',function(req,res){
    base('Projects').destroy(req.body.recordId, function(err, deletedRecord) {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Deleted record', deletedRecord.id);
        return res.send("Deleted");
      }); 
})

app.listen(3000)