//1.Combined two arrays tasks and topics
db.tasks.insertMany([
    {
        "tasksid": "100",
        "tasks": "https://docs.google.com/document/d/1EIpyPItk5xMOQluX5m_cPD4KTI9AnkyqDlO26pbG4a8/edit",
        "month": "september",
        "date": "30-sep-2020"

    },
    {
        "tasksid": "101",
        "tasks": "https://docs.google.com/document/d/1EIpyPItk5xMOQluX5m_cPD4KTI9AnkyqDlO26pbG4a8/edit",
        "month": "october",
        "date": "1-oct-2020"

    },
    {
        "tasksid": "102",
        "tasks": "https://docs.google.com/document/d/1EIpyPItk5xMOQluX5m_cPD4KTI9AnkyqDlO26pbG4a8/edit",
        "month": "october",
        "date": "3-oct-2020"

    },
    {
        "tasksid": "103",
        "tasks": "https://docs.google.com/document/d/1EIpyPItk5xMOQluX5m_cPD4KTI9AnkyqDlO26pbG4a8/edit",
        "month": "october",
        "date": "7-oct-2020"

    },
    {
        "tasksid": "104",
        "tasks": "https://docs.google.com/document/d/1EIpyPItk5xMOQluX5m_cPD4KTI9AnkyqDlO26pbG4a8/edit",
        "month": "october",
        "date": "10-oct-2020"

    },
    {
        "tasksid": "105",
        "tasks": "https://docs.google.com/document/d/1EIpyPItk5xMOQluX5m_cPD4KTI9AnkyqDlO26pbG4a8/edit",
        "month": "october",
        "date": "12-oct-2020",


    },
    {
        "tasksid": "106",
        "tasks": "https://docs.google.com/document/d/1EIpyPItk5xMOQluX5m_cPD4KTI9AnkyqDlO26pbG4a8/edit",
        "month": "october",
        "date": "14-oct-2020"

    },
    {
        "tasksid": "107",
        "tasks": "https://docs.google.com/document/d/1EIpyPItk5xMOQluX5m_cPD4KTI9AnkyqDlO26pbG4a8/edit",
        "month": "november",
        "date": "2-nov-2020"

    },
    {
        "tasksid": "108",
        "tasks": "https://docs.google.com/document/d/1EIpyPItk5xMOQluX5m_cPD4KTI9AnkyqDlO26pbG4a8/edit",
        "month": "october",
        "date": "3-nov-2020"


    },


])

db.topics.insertOne([
    {
        "topic1": "js array and objects",
        "taskid": ObjectId("643a3d2a1fc76ed51d251ca5"),
        "month": "september",

    },
    {
        "topic1": "js request and response",
        "taskid": ObjectId("643a3d2a1fc76ed51d251ca6"),
        "month": "october",

    },
    {
        "topic1": "js xmlHttprequest",
        "taskid": ObjectId("643a3d2a1fc76ed51d251ca7"),
        "month": "october",

    },
    {
        "topic1": "js functions",
        "taskid": ObjectId("643a3d2a1fc76ed51d251ca8"),
        "month": "october",

    },
    {
        "topic1": "HTML",
        "taskid": ObjectId("643a3d2a1fc76ed51d251ca9"),
        "month": "october",

    },
    {
        "topic1": "HTML and CSS",
        "taskid": ObjectId("643a3d2a1fc76ed51d251caa"),
        "month": "october",

    },
    {
        "topic1": "RESPONSEIVE WEB DESIGN",
        "taskid": ObjectId("643a3d2a1fc76ed51d251cab"),
        "month": "october",

    },
    {
        "topic1": "DOM",
        "taskid": ObjectId("643a3d2a1fc76ed51d251cac"),
        "month": "october",

    },
    {
        "topic1": "Document vs window",
        "taskid": ObjectId("643a3d2a1fc76ed51d251cad"),
        "month": "october",

    },


])

//ANSWER
//1.Combined two arrays tasks and topics
db.topics.aggregate([
    { $lookup: { from: "tasks", localField: "taskid", foreignField: "_id", as: "tasks" } },
    { $match: { "month": "october" } },
])

//1.finding the topics and tasks thought on october.
db.topics.aggregate([
    { $match: { month: "october" } },])

db.tasks.aggregate([
    { $match: { month: "october" } },])



//2.company drives appeared between october 15 to october 30:
db.companydrives.insertMany([
    {
        "companyname": "abc",
        "created_at": "Sun Sep 30 18:47:06 +0000 2020",
    },
    {
        "companyname": "abc",
        "created_at": ISODate("2020-10-01T00:00:00.000Z"),
    },
    {
        "companyname": "abc",
        "created_at": ISODate("2020-10-07T00:00:00.000Z"),
    },


    {
        "companyname": "abc",
        "created_at": ISODate("2020-10-10T00:00:00.000Z"),
    },
    {
        "companyname": "xyz",
        "created_at": ISODate("2020-10-15T00:00:00.000Z"),
    },
    {
        "companyname": "mnp",
        "created_at": ISODate("2020-10-17T00:00:00.000Z"),
    },
    {
        "companyname": "yyy",
        "created_at": ISODate("2020-10-19T00:00:00.000Z"),
    },
    {
        "companyname": "lll",
        "created_at": ISODate("2020-10-20T00:00:00.000Z"),
    },
    {
        "companyname": "MMM",
        "created_at": ISODate("2020-10-25T00:00:00.000Z"),
    },
    {
        "companyname": "rst",
        "created_at": ISODate("2020-10-27T00:00:00.000Z"),
    },
    {
        "companyname": "mno",
        "created_at": ISODate("2020-10-29T00:00:00.000Z"),
    },
    {
        "companyname": "abc",
        "created_at": ISODate("2020-10-30T00:00:00.000Z"),
    },


])
//ANSWER
//2.company drives appeared between october 15 to october 30:
db.companydrives.find({
    created_at: {
        $gte: ISODate("2020-10-15T00:00:00.000Z"),
        $lt: ISODate("2020-10-30T00:00:00.000Z")
    }

})

//3.FIND COMPANY DRIVES AND STUDENTS APPEARED FOR PLACEMENTS:
db.students.insertMany([
    {
        "name": "arun",
        "qualification": "BE-Computer Science",
        "placement": "appeared",
        "companydriveId": ObjectId("643a55341fc76ed51d251cd1"),

    },
    {
        "name": "casie",
        "qualification": "BE-Computer Science",
        "placement": "appeared",
        "companydriveId": ObjectId("643a55341fc76ed51d251cd2"),

    },
    {
        "name": "max",
        "qualification": "BE-Computer Science",
        "placement": "appeared",
        "companydriveId": ObjectId("643a55341fc76ed51d251cd3"),

    },
    {
        "name": "casie",
        "qualification": "BE-Computer Science",
        "placement": "not appeared",
        "companydriveId": ObjectId("643a55341fc76ed51d251cd4"),

    },
    {
        "name": "lara",
        "qualification": "BE-Computer Science",
        "placement": "not appeared",
        "companydriveId": ObjectId("643a55341fc76ed51d251cd5"),

    },
    {
        "name": "zaha",
        "qualification": "BE-Computer Science",
        "placement": "not appeared",
        "companydriveId": ObjectId("643a55341fc76ed51d251cd6"),

    },
    {
        "name": "rodri",
        "qualification": "BE-Computer Science",
        "placement": "not appeared",
        "companydriveId": ObjectId("643a55341fc76ed51d251cd7"),

    },
    {
        "name": "william",
        "qualification": "BE-Computer Science",
        "placement": " appeared",
        "companydriveId": ObjectId("643a55341fc76ed51d251cd8"),

    },
    {
        "name": "halland",
        "qualification": "BE-Computer Science",
        "placement": "not appeared",
        "companydriveId": ObjectId("643a55341fc76ed51d251cd9"),

    },
    {
        "name": "halland",
        "qualification": "BE-Computer Science",
        "placement": "not appeared",
        "companydriveId": ObjectId("643a55341fc76ed51d251cda"),

    },
    {
        "name": "tierney",
        "qualification": "BE-Computer Science",
        "placement": "not appeared",
        "companydriveId": ObjectId("643a55341fc76ed51d251cdb"),

    },

    {
        "name": "beth",
        "qualification": "BE-Computer Science",
        "placement": "not appeared",
        "companydriveId": ObjectId("643a55341fc76ed51d251cdc"),

    },


])
//ANSWER
//3.FIND COMPANY DRIVES AND STUDENTS APPEARED FOR PLACEMENTS:
db.students.aggregate([

    { $lookup: { from: "companydrives", localField: "companydriveId", foreignField: "_id", as: "companydrives" } },
    { $match: { placement: "appeared" } },
])

//4.Find number of problems solved by users in codekata
db.allusers.insertMany([
    {
        "name": "arun",
        "codekataproblems": 16,
        "attendance": "present",
        "created_at": ISODate("2020-10-13T00:00:00.000Z"),

    },
    {
        "name": "ramu",
        "codekataproblems": 18,
        "attendance": "absent",
        "created_at": ISODate("2020-10-16T00:00:00.000Z"),

    },
    {
        "name": "falak",
        "codekataproblems": 15,
        "attendance": "present",
        "created_at": ISODate("2020-10-18T00:00:00.000Z"),

    },
    {
        "name": "isabell",
        "codekataproblems": 13,
        "attendance": "present",
        "created_at": ISODate("2020-10-19T00:00:00.000Z"),

    },
    {
        "name": "sounness",
        "codekataproblems": 21,
        "attendance": "absent",
        "created_at": ISODate("2020-10-21T00:00:00.000Z"),


    },
    {
        "name": "laurel",
        "codekata problems": 19,
        "attendance": "present",
        "created_at": ISODate("2020-10-23T00:00:00.000Z"),

    },
    {
        "name": "tammmy",
        "codekataproblems": 18,
        "attendance": "present",
        "created_at": ISODate("2020-10-27T00:00:00.000Z"),

    },
    {
        "name": "daniel",
        "codekataproblems": 23,
        "attendance": "present",
        "created_at": ISODate("2020-10-28T00:00:00.000Z"),

    },
    {
        "name": "isiah",
        "codekataproblems": 15,
        "attendance": "present",
        "created_at": ISODate("2020-10-29T00:00:00.000Z"),

    },
    {
        "name": "carlos",
        "codekataproblems": 24,
        "attendance": "present",
        "created_at": ISODate("2020-11-01T00:00:00.000Z"),


    },
])
//ANSWER.
//4.Number of problems solved by users :
db.allusers.find({ codekataproblems: { $gt: 15 } })

//ANSWER
//6.users absent and not submitted the task between 15 oct 2020 and 31 oct 2020.

db.allusers.find({
    created_at: {
        $not: {
            $gte: ISODate("2020-10-15T00:00:00.000Z"),
            $lt: ISODate("2020-10-30T00:00:00.000Z")
        }
    },


})
//6.users who are all absent
db.allusers.aggregate([
    { $match: { attendance: "absent" } },
])



//5.Mentors who are all having more than 15 mentees:
db.mentors.insertMany([
    {
        "name": "arun",
        "mentees": 16,

    },
    {
        "name": "ramu",
        "mentees": 18,
    },
    {
        "name": "falak",
        "mentees": 15,

    },
    {
        "name": "isabell",
        "mentees": 13,

    },
    {
        "name": "sounness",
        "mentees": 21,


    },
    {
        "name": "laurel",
        "mentees": 19,

    },
    {
        "name": "tammmy",
        "mentees": 18,

    },
    {
        "name": "daniel",
        "mentees": 23,

    },
    {
        "name": "isiah",
        "mentees": 15,

    },
    {
        "name": "carlos",
        "mentees": 24,


    },
])
// ANSWER
//5. Mentors having more than 15 mentees:
db.mentors.find({ mentees: { $gt: 15 } })















