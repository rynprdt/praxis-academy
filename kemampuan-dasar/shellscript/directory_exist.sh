echo "Enter directory name"
read ndir
if [-d "$ndir"]
then
echo "Directory exist"
else
'mksir $ndir'
echo "Directory created"
fi