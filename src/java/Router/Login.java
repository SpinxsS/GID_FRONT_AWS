package Router;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author MSBENAVIDES
 */
@WebServlet(name = "Login", urlPatterns = {"/Login"})
public class Login extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            HttpSession obj = request.getSession(true);
            switch (request.getParameter("action").trim()) {
                case "revertLogin": {
                    obj.setMaxInactiveInterval(60 * 10);
                    obj.setAttribute("NICKNAME", request.getParameter("login").trim());
                    obj.setAttribute("IDKEY", request.getParameter("key").trim());
                    obj.setAttribute("NOMBRES", request.getParameter("names").trim());
                    response.sendRedirect("src/views/Route/index.jsp");
                }
                break;
                case "revertLogout": {
                    obj.removeAttribute("NICKNAME");
                    obj.removeAttribute("IDKEY");
                    obj.removeAttribute("NOMBRES");
                    response.sendRedirect("../../../index.jsp");
                }
                break;
                default: {
                }
                break;
            }

        }
    }
}
