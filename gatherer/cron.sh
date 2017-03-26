#!/bin/bash
# runs every 5 min for now, that gives us time to get ~300 new results (roughly) 20 pages
/usr/local/bin/node --expose-gc /home/dev/csg/gatherer/gather.js >> /home/dev/csg/gatherer/cron.log 2>&1
