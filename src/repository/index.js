// used to export one object which has all the repositories as key value pairs

module.exports={
    Cityrepository:require('./city-repository'),
    Flightrepository:require('./flight-repository'),
    Airplanerepository:require('./airplane-repository'),
    AirportRepository:require('./airport-repository'),
    CrudRepository:require('./crud-repository')
}