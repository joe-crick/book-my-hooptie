import { update, asyncUpdate } from "src/actions/action-creators";
import { jobData } from "src/data/fake";

const fetchJobs = asyncUpdate(amount =>
  new Promise(resolve => setTimeout(() => resolve(jobData(amount)), 200)));

// Named action methods
export const setPickup = pickup => update("pickup", pickup);
export const setDropoff = dropoff => update("dropoff", dropoff);
export const setDate = date => update("date", date);
export const setTime = time => update("time", time);
export const getJobs = query => fetchJobs("jobs", query);
