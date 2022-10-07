const Job = require("../models/Job");


const job_all = async (req, res) => {
    try{
const jobs = await Job.find();
res.json(jobs);
    } catch(error) {
        res.json({message:error});
    }
};



const job_details = async (req, res) => {
    try{
        const job = await Job.findById(req.params.jobId);
        res.json(job);
            } catch(error) {
                res.json({message:error});
            }

};

const job_create = async (req, res) => {
let {title, description, tag, salary, date, recuiter} = req.body;
const job = new Job({title, description, tag, salary, date, recuiter});
try{
    const saveJob = await job.save();
    res.send(saveJob);
} catch(error) {
    res.status(400).send(error);
}

};

const job_update = async (req, res) => {
    try {
        const job = {
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag,
            salary: req.body.salary,
            recuiter: req.body.recuiter,
          date: req.body.date
        };
    
        const updatedJob = await Job.findByIdAndUpdate(
          { _id: req.params.jobId },
          job
        );
        res.json(updatedJob);
      } catch (error) {
        res.json({ message: error });
      }




};

const job_delete = async (req, res) => {
    try {
        const removeJob = await Job.findByIdAndDelete(req.params.jobId);
        res.json(removeJob);
      } catch (error) {
        res.json({ message: error });
      }

};

module.exports = {
    job_all,
    job_details,
    job_create,
    job_update,
    job_delete
}

