package cloud.squad.project;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class ProjectService {


    @Autowired
    private ProjectRepository projectRepository;
}
