from django.shortcuts import render

# Create your views here.
def list(request):

    hide_crsl=True
    return render(request,'sub-pages/list.html',{'hide_crsl':hide_crsl})